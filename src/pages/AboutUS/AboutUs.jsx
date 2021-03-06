import styles from './AboutUs.module.css'
import unnamed from '../../image/unnamed.png'
import Navb from '../../components/Navb/Navb'
import Footer from '../../components/Footer/Footer.jsx'
const { Component } = require("react");

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                  <Navb />
                  <div id="contentAbout" style={{position:"relative",top:"73px"}}>
                <div className={styles["about-section_about"]}>
                    <h1 className={styles["titleAbout"]}>ABOUT US</h1>
                    <h1 class="descAbout">Some text about who we are and what we do.</h1>
                    <h1 class="descAbout">Resize the browser window to see that this page is responsive by the way.</h1>
                </div>
                <div className={styles["second-part_about"]}>
                    <h2 className={styles["middle"]}>Our Team</h2>
                    <div className={styles["row_about"]}>
                        <div className={styles["column_about"]}>
                            <div className={styles["card_about"]}>

                                {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
                                <center> <img src={unnamed}  height="224px" width="200px" className={styles["imgAbout"]}/></center>
                                <div className={styles["container_about"]}>
                                    <h2>Hilal Masri</h2>
                                    <p className={styles["title_about"]}> Back end</p>
                                    <p className={styles["param1"]}>Some text that describes the member.</p>
                                    <p className={styles["param2"]}>name@example.com</p>
                                    <p><button className={styles["button_about"]}>Contact</button></p>
                                </div>
                            </div>
                        </div>

                        <div className={styles["column_about"]}>
                            <div className={styles["card_about"]}>
                                {/* <img src={H} class="member2" alt="H" width="100px" /> */}
                                {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
                                <center>   <img src={unnamed}  height="224px" width="200px" className={styles["imgAbout"]}/></center>
                                <div className={styles["container_about"]}>
                                    <h2>Ibrahim Merhy</h2>
                                    <p className={styles["title_about"]}>front end</p>
                                    <p className={styles["param3"]}>Some text that describes the member.</p>
                                    <p className={styles["param4"]}>name@example.com</p>
                                    <p><button className={styles["button_about"]}>Contact</button></p>
                                </div>
                            </div>
                        </div>

                        <div className={styles["column_about"]}>
                            <div className={styles["card_about"]}>
                                {/* <img src={I} class="member3" alt="I" width="100px" /> */}
                                {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"> */}
                                <center>      <img src={unnamed} height="224px" width="200px" className={styles["imgAbout"]}/></center>
                                <div className={styles["container_about"]}>
                                    <h2>Aymie Chalouhy</h2>
                                    <p className={styles["title_about"]}>Database</p>
                                    <p className={styles["param5"]}>Some text that describes the member.</p>
                                    <p className={styles["param6"]}>name@example.com</p>
                                    <p><button className={styles["button_about"]}>Contact</button></p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <br style={{ clear: "both" }} />
                        <Footer />
                    </div>
                </div>


            </div>
        );
    }
}
