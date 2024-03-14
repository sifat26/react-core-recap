import './Post.css'
export default function Postt({post}){
    console.log(post);
  const {title,body,id,userId}=post;
    return(
        <div className='box'>
            <h4>{title}</h4>
            <p><small>UserId{userId}</small></p>
            <p><small>PostId:{id}</small></p>
            <h5>{body}</h5>
        </div>
        
    )

}