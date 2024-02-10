import '../About/about.css'
import Award from '../../img/award.png'
const About = () => {
    return (
        <section className='ab'>
            <div className="ab-left">
                <div className="ab-card bg"></div>
                <div className="ab-card">
                    <img src="https://i.pinimg.com/564x/23/e3/3e/23e33e2cb0bfbb5b0ab46249904383f7.jpg" alt="" />
                </div>
            </div>
            <div className="ab-right">
                <h2 className='ab-title'>About me</h2>
                <p className="ab-sub">
                    It is a long established fact that a render will be distracted by the readable content
                </p>
                <p className="ab-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta sunt deserunt perferendis tempore consectetur ea temporibus eaque enim quibusdam, at ad voluptatibus voluptate minima id excepturi odit officia tempora optio sapiente molestiae repudiandae provident consequatur eum. Debitis, aspernatur eveniet iure
                </p>
                <div className="ab-award">
                    <img src={Award} alt="" className='ab-award-img' />
                    <div className="ab-award-texts">
                        <h3 className="ab-award-title">
                            International Design Reward 2023
                        </h3>
                        <p className="ab-award-desc">
                            placeat suscipit vel ipsa ullam unde veniam numquam quae doloribus animi voluptatem est sit deleniti deserunt optio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About