
import Article from './Article';



function Articles ({data}) {
    return (
        <>
            {data.map((item, idx) => (
                <Article key ={idx} item={item} idx ={idx} />
            ))}
        </>
    )
}
export default Articles;