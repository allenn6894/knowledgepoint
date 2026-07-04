function ExamDetails({ exams }) {
  return (
    <div className="exam-details-section">
      {exams.map((exam) => (
        <section key={exam.slug} id={exam.slug} className="exam-detail-card">
          <div className="exam-detail-top">
            <span className="exam-detail-date">{exam.start}</span>
            <h3>{exam.title}</h3>
          </div>

          <p className="exam-detail-copy">{exam.description}</p>
          {exam.details ? <p className="exam-detail-more">{exam.details}</p> : null}

          <a className="exam-detail-link" href={exam.link} target="_blank" rel="noreferrer">
            Open official link ↗
          </a>
        </section>
      ))}
    </div>
  );
}

export default ExamDetails;
