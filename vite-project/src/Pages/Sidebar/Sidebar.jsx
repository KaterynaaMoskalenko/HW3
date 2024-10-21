import './Sidebar.css';
import data from '../../data/data.json';
import Topics from '../../components/Topics'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <Topics data={data} />
            
        </div>
    )
}

export default Sidebar;

