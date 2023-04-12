import { useState } from "react";

function RegisterForm2(props) {
  // const [hobbyLists, setHobbyLists] = useState([]);
  // const [info, setInfo] = useState("");
  const maxHobbies = 10;

  const addHobbyLists = () => {
    if (props.info.trim() !== "") {
      if (props.hobbyLists.length >= maxHobbies) {
        alert(`You can only add up to ${maxHobbies} hobbies.`);
        return;
      }
      const newHobbyLists = [...props.hobbyLists];
      newHobbyLists.push(props.info.trim());
      props.setHobbyLists(newHobbyLists);
      props.setInfo("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addHobbyLists();
    }
  };

  const deleteHobby = (index) => {
    const newHobbyLists = [...props.hobbyLists];
    newHobbyLists.splice(index, 1);
    props.setHobbyLists(newHobbyLists);
  };

  return (
    <div className="bg-[#FCFCFE] form-container px-[255px] w-[1440px] mx-auto py-8 h-[500px]">
      <h1 className="text-2xl text-[#A62D82] font-[700]  mt-[20px]">
        Identities and Interests
      </h1>
      <div className="info-container grid grid-cols-2 grid-rows-2 gap-5">
        <div>
          <h1>Sexual identities </h1>
          <select
            className=" border-[1px] text-[#9AA1B9] font-normal border-[#D6D9E4] rounded-lg w-[453px] h-[48px] py-[12px]  pl-[12px]"
            name="Sexual identities"
            value={props.sexualIdentity}
            onChange={(e) => props.setSexualIdentity(e.target.value)}
          >
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div>
          <h1>Sexual preferences</h1>
          <select
            className=" border-[1px] text-[#9AA1B9] font-normal border-[#D6D9E4] rounded-lg w-[453px] h-[48px] py-[12px]  pl-[12px]"
            name="Sexual preferences"
            value={props.sexualPreference}
            onChange={(e) => props.setSexualPreference(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Female ">
              Female
            </option>
          </select>
        </div>
        <div>
          <h1>Racial preferences</h1>
          <select
            className=" border-[1px] text-[#9AA1B9] font-normal border-[#D6D9E4] rounded-lg w-[453px] h-[48px] py-[12px]  pl-[12px]"
            name="Racial preferences"
            value={props.racialPreference}
            onChange={(e) => props.setRacialPreference(e.target.value)}
          >
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="European">European</option>
            <option value="Caucasian">Caucasian</option>
            <option value="African">African</option>
            <option value="Asian">
              Asian
            </option>
          </select>
        </div>
        <div>
          <h1>Meeting interests</h1>
          <select
            className=" border-[1px] text-[#9AA1B9] font-normal border-[#D6D9E4] rounded-lg w-[453px] h-[48px] py-[12px]  pl-[12px]"
            name="Meeting interests"
            value={props.meetingInterest}
            onChange={(e) => props.setMeetingInterest(e.target.value)}
          >
            <option value="Partners">Partners</option>
            <option value="Long-term commitment">Long-term commitment</option>
            <option value="Short-term commitment">Short-term commitment</option>
            <option value="Friends">
              Friends
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col  mt-[50px]">
        <div className="relative flex flex-col items-start">
          <h1>Hobbies / Interests (Maximum 10)</h1>
          <input
            className="border-[1px] font-normal border-[#D6D9E4] rounded-lg w-[996px] h-[48px] py-[12px] pr-[12px] pl-[12px] mb-4"
            type="text"
            value={props.info}
            onChange={(e) => {
              props.setInfo(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
          {props.hobbyLists.length > 0 && (
            <div className=" border-[1px] border-none rounded-lg p-[8px] text-[#9AA1B9] text-sm">
              <ul className="flex flex-wrap">
                {props.hobbyLists.map((hobby, index) => (
                  <li
                    key={index}
                    className="bg-[#F4EBF2]  border-[#D6D9E4]  rounded-lg p-[8px] text-[#7D2262] text-[14px] mr-2 mb-2 flex items-center"
                  >
                    {hobby}
                    <button
                      className="border-none bg-transparent text-[#7D2262] ml-4 cursor-pointer"
                      onClick={() => deleteHobby(index)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterForm2;
