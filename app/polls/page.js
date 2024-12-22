// app/polls/page.js

export default function PollsPage() {
  return (
    <div className="center-content">
      <div>
        <h1>Polls</h1>
        <form>
          {/* Poll 1 */}
          <h3>1. Do you like the new community park?</h3>
          <button type="button" style={{ backgroundColor: 'green', color: 'white' }}>Yes</button>
          <button type="button" style={{ backgroundColor: 'red', color: 'white' }}>No</button>
          <br /><br />

          {/* Poll 2 */}
          <h3>2. Do you think there should be more sports facilities?</h3>
          <button type="button" style={{ backgroundColor: 'green', color: 'white' }}>Yes</button>
          <button type="button" style={{ backgroundColor: 'red', color: 'white' }}>No</button>
          <br /><br />

          {/* Poll 3 */}
          <h3>3. Should there be a public library in the park area?</h3>
          <button type="button" style={{ backgroundColor: 'green', color: 'white' }}>Yes</button>
          <button type="button" style={{ backgroundColor: 'red', color: 'white' }}>No</button>
          <br /><br />

          {/* Poll 4 */}
          <h3>4. Do you agree with the new public transport routes?</h3>
          <button type="button" style={{ backgroundColor: 'green', color: 'white' }}>Yes</button>
          <button type="button" style={{ backgroundColor: 'red', color: 'white' }}>No</button>
          <br /><br />

          {/* Poll 5 */}
          <h3>5. Would you like to see more community events in the park?</h3>
          <button type="button" style={{ backgroundColor: 'green', color: 'white' }}>Yes</button>
          <button type="button" style={{ backgroundColor: 'red', color: 'white' }}>No</button>
        </form>
      </div>
    </div>
  );
}
