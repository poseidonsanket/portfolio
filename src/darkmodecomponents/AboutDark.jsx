import React from "react";
import "../css/AboutDark.css";
import TechStackDark from "./TechStackDark";
import about from "../img/about-img-dark.gif";

const AboutDark = () => {
  return (
    <div id="section2">
      <div className="about-main">
        <div className="about-title">
          <h2>About Me</h2>
        </div>
        <div className="about-info">
          <div>
            <p className="about-main-dark">
              Hey there this is Sanket Dadali 👋 <br /> I am currently pursuing
              my B.E from AISSMS College of Engineering Pune. <br />I am
              currently learning MERN Stack Development.<br/>I also Love to solve DSA Problems in C++.
            </p>
            <div className="about-logos-main">
              <div className="about-platform-dark"
              >
                Platform Profiles :{" "}
              </div>
              <div className="about-logos">
                <a
                  className="leetcode"
                  href="https://leetcode.com/poseidonsanket/"
                  target="_blank"
                >
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    role="img"
                    fill="  white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LeetCode icon</title>
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                  </svg>
                </a>
                <a
                  className="gfg"
                  href="https://auth.geeksforgeeks.org/user/dadalisanket"
                  target="_blank"
                >
                  <svg
                    fill="white"
                    width="64px"
                    height="64px"
                    viewBox="0 0 24.00 24.00"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"></path>
                    </g>
                  </svg>
                </a>
                <a
                  className="codechef"
                  href="https://www.codechef.com/users/dadalisanket"
                  target="_blank"
                >
                  <svg
                    fill="white"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M11.257.004c-.37.01-.735.04-1.1.095-.54.054-1.08.325-1.675.595-.757.324-1.515.649-2.218.703-1.19.378-1.568.919-1.892 1.351 0 .054-.054.108-.054.108-.433.865-.487 1.73-.325 2.595.162.541.378 1.029.54 1.515.38 1.028.758 2 .92 3.136.163.325.324.757.432 1.19.27.865.542 1.838 1.353 2.595l.006-.003c.017.019.03.04.048.057l.021-.01-.02-.584c.648-.974 1.566-1.623 2.864-1.893.52-.11 1.081-.15 1.663-.128a8.773 8.773 0 0 1 1.798.236c1.46.378 2.595 1.136 2.65 1.785.027.354.04.695.032 1.036 0 .064-.004.128-.007.193l.136.068a.639.639 0 0 0 .206-.19l.003-.003.006-.008c.04-.054.075-.124.11-.194.02-.037.038-.086.056-.129.205-.462.362-1.153.538-1.963.054-.27.11-.487.163-.703.433-.973 1.027-1.838 1.622-2.65.973-1.35 1.892-2.595 1.784-4.055-1.784-3.461-4.272-4.002-5.57-4.272-.216-.054-.323-.054-.485-.108-1.338-.244-2.494-.396-3.605-.365zM16.3 14.383a9.86 9.86 0 0 0-.032-.983c-.054-.703-1.19-1.46-2.704-1.838a9.536 9.536 0 0 0-1.744-.236 6.761 6.761 0 0 0-1.555.128c-1.244.27-2.216.92-2.811 1.892l.051 1.431c.667-.355 1.733-.874 3.14-1 .065-.005.136-.005.204-.009.117-.013.266-.044.444-.044 1.607 0 3.268.534 4.877 1.648.039-.274.06-.549.07-.823l.045.023c.002-.063.014-.127.015-.19zM11.256.058c.124-.004.254.01.379.011-.23-.002-.459.003-.687.016.103-.006.205-.024.308-.027zm.498.015zM10.44.13c-.076.009-.153.013-.229.024-.817.117-1.774.701-2.75 1.045.355-.132.714-.296 1.075-.45.54-.27 1.135-.541 1.621-.595.094-.014.189-.013.283-.024zm-.229.24c.162 0 .379 0 .541.054a.995.995 0 0 0-.37-.014 1.174 1.174 0 0 1 .316.068c.58 1-.426 5.279-.679 8.149a57.37 57.37 0 0 0 .463 2.72c-.703-1.784-1.406-4.921-1.515-7.354-.054-.973.001-1.839.218-2.487C9.4.855 9.725.423 10.21.369zm3.136.27c-.81 2.11-.918 6.11-.972 7.354-.054.54 0 1.73.054 2.595 0 .216.054.432.054.649 0-.217-.054-.379-.054-.595-.433-3.244-.974-7.136.918-10.002zm3.352.379c-.27 2.162-1.405 3.19-1.783 5.3-.108 1.676-.325 3.622-.379 5.298-.054-1.676 0-3.46.27-5.245.27-1.838.865-3.677 1.892-5.353zM6.32 1.45zm.21.197a.856.856 0 0 1 .6.236l-.014-.007c.133.092.266.209.393.384-.204.968.255 3.032.04 4.67.076 1.548.071 3.18.849 4.459-.98-1.51-1.176-3.438-1.322-5.236-.113-1.09-.204-2.097-.464-2.903-.144-.305-.269-.575-.384-.822-.024-.037-.044-.079-.07-.114a.582.582 0 0 1-.162-.377c0-.054.053-.162.108-.162.054-.054.161-.056.215-.11a1.013 1.013 0 0 1 .21-.018zm-1.347.613c-.06.02-.092.041-.14.061.177-.034.362.034.52.318-.188.892.436 3.369.428 5.104.313 1.848.55 3.85 1.572 5.115-1.19-1.351-1.676-3.73-2.054-5.731-.325-1.568-.596-2.92-1.136-3.352-.054-.108-.108-.163-.108-.271 0-.162 0-.379.108-.595-.277.634-.405 1.267-.37 1.901a3.844 3.844 0 0 1 .37-1.901c0-.054.054-.054.054-.108.012-.016.031-.035.044-.051a.878.878 0 0 1 .226-.257c.055-.061.096-.12.159-.182-.053.056-.088.11-.134.165.027-.018.052-.037.084-.052a.49.49 0 0 1 .377-.164zm-.377.164c-.004.007-.008.01-.012.018l.037-.03-.025.012zm14.76 1.134-.005.015c.038-.005.075-.017.113-.015-.037-.002-.076.01-.115.02-.863 2.642-1.887 5.284-2.911 7.926a.018.018 0 0 1-.002.003c-.087.465-.234.884-.54 1.19.433-.487.486-1.191.54-2.056.054-.811.054-1.676.487-2.542 0-.053.001-.105.053-.159l.001-.002c.097-.353.202-.689.317-1.018.418-1.29 1.14-3.166 2.013-3.34.016-.006.034-.019.05-.022zM8.374 16.21l-.324.108c.162.217.27.38.378.433a.784.784 0 0 0 .379.108c.054 0 .161 0 .215-.054l.812-.27c.054 0 .108-.054.162-.054.108 0 .162 0 .27.054l.271.27.27-.054c-.108-.162-.27-.323-.378-.377-.108-.054-.217-.11-.379-.11h-.108l-.866.325h-.161c-.109 0-.216 0-.27-.054-.054-.054-.163-.162-.271-.325zm-2.596.541c-.27.162-.649.433-1.19.649-.54.216-.973.433-1.19.649-.215.216-.323.432-.323.649 0 .108.054.163.162.217.054.054.163.054.217.108a27.9 27.9 0 0 1 2.216 1.08c.109.054.217.163.272.217.054.054.107.054.161.054.109 0 .27-.053.378-.162.108-.108.163-.217.163-.325 0-.108-.055-.161-.163-.215 0 0-.433-.217-1.19-.541a11.967 11.967 0 0 1-1.188-.595c.162-.27.486-.487.973-.703.54-.216.92-.433 1.081-.595.054-.054.054-.108.054-.162a.412.412 0 0 0-.108-.217.415.415 0 0 0-.27-.108zm11.247 0a.408.408 0 0 0-.216.108c-.054.108-.109.163-.109.217v.054c.162.162.38.27.704.378.27.054.54.163.811.217.324.108.54.27.649.486v.055c0 .054-.109.162-.325.27-.108.054-.325.217-.595.433-.27.162-.433.323-.595.377-.216.109-.378.217-.432.326-.054.054-.054.107-.054.161 0 .108.054.108.108.216s.162.11.216.11c.054 0 .108-.056.162-.056.27-.162.65-.378 1.082-.757.486-.378.865-.648 1.082-.81.216-.108.323-.217.323-.38 0-.053 0-.161-.108-.215-.378-.433-.918-.702-1.567-.919-.108-.054-.27-.109-.595-.163-.162-.054-.325-.108-.433-.108zm-2.974.81c-.27 0-.487.056-.649.218-.216.162-.27.432-.216.757 0 .27.108.486.27.703.162.216.379.325.595.325.162 0 .27-.056.433-.11.27-.162.379-.432.379-.918 0-.379-.109-.649-.271-.81a.915.915 0 0 0-.541-.164zm-4.488.055c-.27 0-.486.055-.648.217-.217.162-.27.432-.216.757 0 .27.107.486.27.702s.378.326.594.326c.163 0 .271-.056.433-.11.27-.162.378-.432.378-.918 0-.433-.108-.703-.27-.81a.915.915 0 0 0-.54-.164zm0 .65c.163 0 .271.108.271.27 0 .162-.163.27-.27.27-.163 0-.27-.108-.27-.27s.107-.27.27-.27zm4.38.054c.162 0 .271.107.271.27 0 .108-.109.27-.27.27-.163 0-.27-.108-.27-.27 0-.163.107-.27.27-.27zm-2.703 2.108.162.324a.947.947 0 0 0 .216.271c.054.054.163.162.27.162h.109c.108 0 .161 0 .215-.054.054-.054.164-.054.218-.108l.161-.162c.054-.054.108-.109.108-.163.054-.054.054-.108.108-.162 0-.054.054-.108.054-.108-.054.108-.162.216-.216.324-.108.054-.161.163-.27.163-.107.054-.216.054-.324.054s-.216 0-.27-.054c-.108 0-.163-.054-.217-.108l-.162-.163c-.054-.054-.108-.162-.162-.216zm-.866 1.028c-1.136 0-1.838 1.514-3.46.162-.432 2.65 2.758 2.866 4.11 1.73.92-.81.648-1.946-.65-1.892zm2.866 0c-1.297-.054-1.568 1.082-.648 1.893 1.351 1.135 4.54.918 4.108-1.731-1.622 1.352-2.27-.162-3.46-.162z"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="about-img">
            <img src={about} />
          </div>
        </div>
      </div>
      <TechStackDark />
    </div>
  );
};

export default AboutDark;
