// app/survey/page.js

export default function SurveyPage() {
  return (
    <div className="center-content">
      <div>
        <h1>Survey</h1>
        <form>
          <h3>1. How satisfied are you with the community park?</h3>
          <input type="radio" id="satisfied" name="satisfaction" value="satisfied" />
          <label htmlFor="satisfied">Satisfied</label><br />
          <input type="radio" id="neutral" name="satisfaction" value="neutral" />
          <label htmlFor="neutral">Neutral</label><br />
          <input type="radio" id="dissatisfied" name="satisfaction" value="dissatisfied" />
          <label htmlFor="dissatisfied">Dissatisfied</label><br />

          <h3>2. How often do you visit the park?</h3>
          <input type="radio" id="daily" name="visit-frequency" value="daily" />
          <label htmlFor="daily">Daily</label><br />
          <input type="radio" id="weekly" name="visit-frequency" value="weekly" />
          <label htmlFor="weekly">Weekly</label><br />
          <input type="radio" id="monthly" name="visit-frequency" value="monthly" />
          <label htmlFor="monthly">Monthly</label><br />

          <h3>3. Do you think the park needs more facilities?</h3>
          <input type="radio" id="yes-facilities" name="facilities" value="yes" />
          <label htmlFor="yes-facilities">Yes</label><br />
          <input type="radio" id="no-facilities" name="facilities" value="no" />
          <label htmlFor="no-facilities">No</label><br />

          <h3>4. Would you recommend the park to others?</h3>
          <input type="radio" id="recommend-yes" name="recommend" value="yes" />
          <label htmlFor="recommend-yes">Yes</label><br />
          <input type="radio" id="recommend-no" name="recommend" value="no" />
          <label htmlFor="recommend-no">No</label><br />

          <h3>5. What can we improve in the park?</h3>
          <textarea id="improvements" name="improvements" rows="4" cols="50" placeholder="Enter suggestions for improvement here"></textarea><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
