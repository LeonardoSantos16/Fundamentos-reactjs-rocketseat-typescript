import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { Comment } from './comment';
import { Avatar } from './Avatar';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
export interface PostType{
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}
interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) { // para objetos
    const [newCommentsText, setNewCommentText] = useState('');
    const [comments, setComments] = useState([
        "Vasco da gama"
    ]);
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR,
    });
  
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
      locale: ptBR,
      addSuffix: true
    });

    function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }
    function handleCreateNewComment(event : FormEvent){
        event.preventDefault()


        setComments([...comments, newCommentsText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete : string){
        // imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentsText.length == 0;
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                   {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>; // a key fica sempre no primeiro elemento de um map
                    } else if(line.type === 'link'){
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder="Deixe um comentário"
                    value={newCommentsText}
                    onChange={handleNewCommentChange}
                    required //obrigatório
                    onInvalid={handleNewCommentInvalid} // função será chamada sempre que o html identificar que foi tentando um submit, mas o texto foi inválido
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment}content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
        )
}