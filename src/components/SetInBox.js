import  './SetInBox.css'
import box_donut from '../img/box_donut.png';


const SetInBox =()=>{
    return(<div className="box __container">
        <div className="box_menu">
            <ul>
                <li className='box_link'><a href="/" >Chocolate Paradise</a></li>
                <li className='box_link'><a href="/" >Rainbow mix</a></li>
                <li className='box_link'><a href="/" >The Forbidden fruit</a></li>
                <li className='box_link'><a href="/" >White delight</a></li>
                <li className='box_link'><a href="/" >Snake bite</a></li>
                <li className='box_link'><a href="/" >Maiden's kiss</a></li>
                <li className='box_link'><a href="/" >Night Passion</a></li>
                <li className='box_link'><a href="/" >Your dream</a></li>
                <li className='box_link'><a href="/" >How is your dream</a></li>
                <li className='box_link'><a href="/" >Night raid</a></li>
            </ul>
        </div>
        <div className="box_img">
        <img src={box_donut} alt="box_donut"/>
        <p className="box_text">Box contains 6 donuts with chocolate and hazelnut filling
        </p>
        </div>
    </div>)
}
export default SetInBox