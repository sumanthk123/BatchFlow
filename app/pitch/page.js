import './pitch.css'; // Import the new CSS file
import Header from "../Header/page";

export default function Pitch() {
  return (
    <>
      <Header />
      <div className="pitch-container">
        <div className="pitch-card">
          
          <div className="pitch-section-header">
            Problem
          </div>
          <div className="pitch-section-text">
            As more businesses and developers adopt LLMs, there is a growing challenge in <span className="font-bold">effectively managing, tracking, and improving </span> models. Without a dedicated platform, developers and teams often struggle with:
            <ul className="pitch-list">
              <li>Lack of centralized model storage and version tracking.</li>
              <li>Inability to easily compare different versions of their models.</li>
              <li>No efficient way to monitor key performance metrics over time.</li>
              <li>Complex deployment and scaling processes for managing multiple models.</li>
            </ul>
            These challenges create inefficiencies in both the development and deployment of LLMs, especially for small to medium-sized companies without access to expensive enterprise solutions.
          </div>

          <div className="pitch-section-header">
            Solution
          </div>
          <div className="pitch-section-text">
            Our startup aims to create a centralized command center and version control system specifically designed for Large Language Models (LLMs). This platform will function as a GitHub-style repository for LLMs, allowing small companies and software developers to store, evaluate, and monitor their LLMs across multiple versions.
            <br />
            <br />
            With the increasing complexity and prevalence of LLMs, the need for efficient model management and evaluation tools has become crucial. 
            Our solution will also provide an intuitive dashboard that displays essential metrics, such as accuracy, model performance, and version history, 
            allowing users to make data-driven decisions about their models.
          </div>

          <div className="pitch-section-header">
            TL;DR
          </div> 
          <div className="pitch-section-text">
            <ul className="pitch-tldr-list">
              <li>
                Connect all LLM Workflow data sources (model files, datasets, prompt injections, etc.) to BatchFlow to create a source of truth for the black box of LLMs. No coding required.
              </li>
              <li>
                BatchFlow dynamically creates prompts personalized to datasets allowing for easy evaluation on small, in-house LLMs.
              </li>
              <li>
                BatchFlow displays a version control system to easily access model analytics and compare effectiveness of different prompting techniques.
              </li>
            </ul>
          </div>

          <div className="pitch-section-header">
            Ask
          </div>
          <div className="pitch-section-text">
            We are currently seeking mentors to provide guidance and are looking for AI and database professionals for additional support.
          </div>

        </div>
      </div>
    </>
  );
}
