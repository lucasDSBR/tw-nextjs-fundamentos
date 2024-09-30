import { BlogPost } from "@/data/@types/BlogPostInterface";
import Link from "next/link";
import styles from './PostList.module.css';
export default function PostList({posts}: { posts: BlogPost[]}){

	return (
		<ul className={styles.postList}>
			{
				posts.map(post =>{
					return <PostListItem key={post.id} post={post}></PostListItem>
				})
			}
		</ul>
	)
}


export function PostListItem({post}: { post: BlogPost}){
	return (
		<li className={styles.postListItem}>
			<Link href={`posts/${post.slug}`}>
				<img className={styles.postPicture} src={post.picture} alt={post.title}/>
				<h2 className={styles.postTitle}>{post.title}</h2>
				<p>{post.description}</p>
			</Link>
		</li>
	)
}