import { useState, useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    content:
      '"Dear Teachers, we have an upcoming professional development workshop on [topic] scheduled for [date]. Please mark your calendars, and more details will follow."',
  },
  {
    id: 2,
    content:
      '"Hello Teachers, we are excited to announce an update to the LMS platform. New features and improvements have been added to enhance your teaching experience. Explore and let us know your feedback!"',
  },
  {
    id: 3,
    content:
      '"Friendly Reminder: Parent-Teacher meetings are scheduled for [date]. Please ensure you have communicated with parents and are prepared to discuss student progress. Thank you for your cooperation."',
  },
  {
    id: 4,
    content:
      '"Attention Teachers, the school is organizing a workshop on incorporating technology in the classroom. This interactive session aims to equip you with the latest tools and techniques to enhance teaching effectiveness. Save the date and stay tuned for registration details."',
  },
  {
    id: 5,
    content:
      '"Greetings Educators, we are thrilled to introduce a new curriculum framework for the upcoming academic year. The revised syllabus emphasizes critical thinking, creativity, and collaboration. Get ready to embark on an exciting journey of innovative teaching and learning!"',
  },
  {
    id: 6,
    content:
      '"Important Notice: The school administration is conducting a safety drill next week. As educators, its crucial to ensure that students are well-prepared and informed about emergency procedures. Lets work together to maintain a safe learning environment for everyone."',
  },
];

function Annoucement() {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-[28px] font-[600]">Announcements</h1>
        <div className="box-with-shadow h-full max-h-[350px] w-full max-w-[360px] overflow-auto mt-3 rounded-md bg-white ">
          <ul className="px-7 py-3">
            {data.map((item) => {
              return (
                <li className="py-3" key={item.id}>
                  <span className="font-bold">{item.id}.</span>
                  {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Annoucement;
