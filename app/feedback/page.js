// app/feedback/page.js

export default function FeedbackPage() {
  return (
    <div className="center-content">
      <div>
        <h1>Submit Your Feedback</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" /><br /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" /><br /><br />

          <label htmlFor="feedback">Your Feedback:</label><br />
          <textarea id="feedback" name="feedback" rows="4" cols="50" placeholder="Enter your feedback here"></textarea><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
