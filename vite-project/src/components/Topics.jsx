
import Topic from './Topic';


function Topics({data}) {
    return (
        <>
            {data.map((item, idx) => (
            <Topic key={idx} item={item} idx={idx} />
        ))}
        </>
    )
}

export default Topics;


// <nav>
//                 <ul>
//                     {data.map((obj, idx) => (
//                         <li key={idx}>
//                             <a href={obj.href}>{ obj.title}</a>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>