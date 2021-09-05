import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function summitHandler(event) {
    event.preventDefault();
    const entredTitle = titleInputRef.current.value;
    const entredImage = imageInputRef.current.value;
    const entredAddress = addressInputRef.current.value;
    const entredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: entredTitle,
      image: entredImage,
      address: entredAddress,
      description: entredDescription,
    };
    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={summitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="adsress">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
