// App.js
import { useReducer, useRef, useState } from "react";

//Logger
const logAction = (action, state) => {
  console.group("-----", action.type, "-----");
  console.log("Aciton: ", action);
  console.log("Prev state: ", state);
};

//Init state
const initState = {
  job: "",
  jobs: []
};

//Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";
const UPDATE_JOB = "update_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  };
};

const updateJob = (payload) => {
  return {
    type: UPDATE_JOB,
    payload
  };
};

let newState;

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      };
      break;
    case ADD_JOB:
      logAction(action, state);
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      };

      console.log("New state: ", newState);
      console.groupEnd();
      break;
    case DELETE_JOB:
      logAction(action, state);

      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);

      newState = {
        ...state,
        jobs: newJobs
      };

      console.log("New state: ", newState);
      console.groupEnd();
      break;
    case UPDATE_JOB:
      logAction(action, state);

      const updateJob = [...state.jobs];
      updateJob[action.payload.index] = action.payload.value;
      newState = {
        ...state,
        jobs: updateJob
      };

      console.log("New state: ", newState);
      console.groupEnd();
      break;
    default:
      throw new Error("Invalid action");
  }

  return newState;
};

//Component App
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [indexEdit, setIndexEdit] = useState();
  const [valueEdit, setValueEdit] = useState("");

  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  const handleEditJob = (index) => {
    setIndexEdit(index);
    setValueEdit(state.jobs[index]);
  };

  const handleUpdateJob = (index, value) => {
    dispatch(updateJob({ index, value }));
    setIndexEdit();
  };

  return (
    <div style={{ padding: "0px 20px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo ..."
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {indexEdit === index ? (
              <>
                <input
                  value={valueEdit}
                  onChange={(e) => setValueEdit(e.target.value)}
                />
                <button onClick={() => handleUpdateJob(index, valueEdit)}>
                  Save
                </button>
                <button onClick={() => setIndexEdit(function(p1: undefined){return undefined;})}>Cancel</button>
              </>
            ) : (
              <>
                {job}
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleEditJob(index)}
                >
                  Edit
                </button>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => dispatch(deleteJob(index))}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
