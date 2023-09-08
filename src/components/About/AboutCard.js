import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hello Everyone, I am <span className="purple">Agnik Saha </span>from <span className="purple"> Dhaka, Bangladesh.</span>
            <br /> I am a recent graduate from the esteemed Indian Institute of Technology (IIT), Kharagpur, where I earned my Master of Technology (M.Tech) degree in Computer Science & Engineering. My academic journey has been marked by a deep dive into the world of computer science, with a focus on cutting-edge subjects that have equipped me with a solid foundation in the field.
            <br /> 
Currently, I am working as a Lecturer in the department of Computer Science and Engineering at R.P. Shaha University in Bangladesh, where I continue to nurture and inspire the minds of aspiring computer scientists.
            <br />
            My crowning achievement during my master's journey was my thesis, titled "Analysis & Enrichment of Online Knowledge Communities: Stack Exchange & Wikipedia." This research delved into the dynamics of Stack Exchange and Wikipedia, uncovering intriguing correlations between query structures, user interactions, and response times.
            <br/>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;