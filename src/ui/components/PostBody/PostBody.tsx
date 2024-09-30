import { BlogPost } from "@/data/@types/BlogPostInterface";
import styles from './PostBody.module.css'
export default function PostBody({post}: {post: BlogPost}){
	return (
		<div className={styles.postContainer}>
			<h1 className={styles.postTitle}>{post.title}</h1>
			<img className={styles.postPicture} src={post.picture} alt={post.title}/>
			<div className={styles.postContent}>
				{post.conteudo}
			</div>
		</div>
	)
}