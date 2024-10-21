
function Topic({ item }) {
    return (
        <section>
            <h2>{item.title}</h2>
            <div>
                <a href={item.href} target="_blank">{ item.href}</a>
            </div>
            
        </section>
    )
}

export default Topic;