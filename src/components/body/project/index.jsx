import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Slider from "infinite-react-carousel";
import saveMoney from "../../../assets/img/savemoney.png";
import github from "../../../assets/img/github.png";
import world from "../../../assets/img/world.png";
import covid from "../../../assets/img/covid19.PNG";
import octavian from "../../../assets/img/octavian.PNG";
import setsail from "../../../assets/img/setsail.PNG";
import youtube from "../../../assets/img/youtube.PNG";
Project.propTypes = {};

function Project(props) {
  return (
    <>
      <div class="separator"></div>
      <label class="section-title">Projects</label>
      <div>
        <Slider dots>
          <div className="project-item">
            <h3 className="project-title">Save Money</h3>
            <div className="project-link">
              <a
                href="https://saving-money.netlify.app/"
                className="project-demo"
              >
                <img src={world} alt="" className="project-img-icon" />
                Demo
              </a>
              <a
                href="https://github.com/tinnhat/P210-SaveMoney"
                className="project-demo"
              >
                <img src={github} alt="" className="project-img-icon" />
                Github
              </a>
            </div>
            <p className="project-desc">
              Web site gửi tiền tiết kiệm theo kì hạn{" "}
              <span>(Project môn học)</span>
            </p>
            <div className="project-tech">
              <p className="project-tech-item">ReactJS</p>
              <p className="project-tech-item">HTML5</p>
              <p className="project-tech-item">CSS3</p>
              <p className="project-tech-item">Figma</p>
            </div>
            <img src={saveMoney} alt="" className="project-img" />
          </div>
          <div className="project-item">
            <h3 className="project-title">Covid-19</h3>
            <div className="project-link">
              <a
                href="https://tinnhat.github.io/Covid-19/"
                className="project-demo"
              >
                <img src={world} alt="" className="project-img-icon" />
                Demo
              </a>
              <a
                href="https://github.com/tinnhat/Covid-19"
                className="project-demo"
              >
                <img src={github} alt="" className="project-img-icon" />
                Github
              </a>
            </div>
            <p className="project-desc">
              Landing page Covid-19 figma <span>(Project cá nhân)</span>
            </p>
            <div className="project-tech">
              <p className="project-tech-item">HTML5</p>
              <p className="project-tech-item">CSS3</p>
              <p className="project-tech-item">Javascript</p>
              <p className="project-tech-item">Figma</p>
            </div>
            <img src={covid} alt="" className="project-img" />
          </div>
          <div className="project-item">
            <h3 className="project-title">Octavian</h3>
            <div className="project-link">
              <a
                href="https://tinnhat.github.io/Octavian"
                className="project-demo"
              >
                <img src={world} alt="" className="project-img-icon" />
                Demo
              </a>
              <a
                href="https://github.com/tinnhat/Octavian"
                className="project-demo"
              >
                <img src={github} alt="" className="project-img-icon" />
                Github
              </a>
            </div>
            <p className="project-desc">
              Landing page Octavian PSD <span>(Project cá nhân)</span>
            </p>
            <div className="project-tech">
              <p className="project-tech-item">HTML5</p>
              <p className="project-tech-item">CSS3</p>
            </div>
            <img src={octavian} alt="" className="project-img" />
          </div>
          <div className="project-item">
            <h3 className="project-title">Winter Holiday</h3>
            <div className="project-link">
              <a
                href="https://tinnhat.github.io/winter-holiday/"
                className="project-demo"
              >
                <img src={world} alt="" className="project-img-icon" />
                Demo
              </a>
              <a
                href="https://github.com/tinnhat/winter-holiday"
                className="project-demo"
              >
                <img src={github} alt="" className="project-img-icon" />
                Github
              </a>
            </div>
            <p className="project-desc">
              Landing page Setsail Winter Holidays{" "}
              <span>(Project cá nhân)</span>
            </p>
            <div className="project-tech">
              <p className="project-tech-item">HTML5</p>
              <p className="project-tech-item">CSS3</p>
              <p className="project-tech-item">Javascript</p>
              <p className="project-tech-item">Jquery</p>
            </div>
            <img src={setsail} alt="" className="project-img" />
          </div>
          <div className="project-item">
            <h3 className="project-title">Winter Holiday</h3>
            <div className="project-link">
              <a
                href="https://tinnhat.github.io/youtube/"
                className="project-demo"
              >
                <img src={world} alt="" className="project-img-icon" />
                Demo
              </a>
              <a
                href="https://github.com/tinnhat/youtube"
                className="project-demo"
              >
                <img src={github} alt="" className="project-img-icon" />
                Github
              </a>
            </div>
            <p className="project-desc">
              Youtube <span>(Project cá nhân)</span>
            </p>
            <div className="project-tech">
              <p className="project-tech-item">HTML5</p>
              <p className="project-tech-item">CSS3</p>
              <p className="project-tech-item">Javascript</p>
            </div>
            <img src={youtube} alt="" className="project-img" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Project;
