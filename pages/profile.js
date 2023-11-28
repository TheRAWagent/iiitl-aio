import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const branches = {
  cs: "Computer Science",
  it: "Information Technology",
  ci: "Computer Science and AI",
};

function profile() {
  const params = useSearchParams();
  const email = params.get("email");
  console.log(email);
  const [profilepic, setprofilepic] = useState(
    "https://i.pinimg.com/originals/77/45/a4/7745a4b9d2ec499547f049b42fb57a9f.jpg"
  );
  const [name, setName] = useState("John Doe");
  const [branch, setBranch] = useState("Computer Science");
  const [batch, setBatch] = useState("2023");
  useEffect(() => {
    async function fetchData() {
      await fetch("http://127.0.0.1:5000/api/user?email=" + email, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.email) {
            console.log(data);
            if (
              data.imgUrl !=
              "https://i.pinimg.com/originals/77/45/a4/7745a4b9d2ec499547f049b42fb57a9f.jpg"
            )
              setprofilepic(data.imgUrl ? data.imgUrl : profilepic);
            if (data.name) setName(data.name);
            setBranch(branches[data.email.substring(1, 3)]);
            setBatch(data.email.substring(3, 7));
            setSkills(data.skills ? data.skills : skills);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [email]);

  const [skills, setSkills] = useState([
    "Web Development",
    "Data Analysis",
    "Java Programming",
  ]);
  return (
    <div className="profile-container">
      <div className="profile-photo">
        <img src={profilepic} alt="Profile Photo" />
      </div>
      <div className="user-info">
        <p>Name: {name}</p>
        <p>Branch: {branch}</p>
        <p>Batch: {batch}</p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          width: "100vw",
        }}
      >
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>✅ {skill}</li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default profile;
