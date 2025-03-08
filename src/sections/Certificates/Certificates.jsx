import styles from './CertificatesStyles.module.css';
import certificate1 from '../../assets/Advanced.jpg';
import certificate2 from '../../assets/Beginner.jpg';
import certificate3 from '../../assets/Intermediate.jpg';
import certificate4 from '../../assets/backend.jpg';
function Certificates() {
  return (
    <section id="certificates" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.certificatesContainer}>
        <div className={styles.certificateCard}>
          <img src={certificate2} alt="Certificate 1" />
          <p>Beginner Froented Developer Certificate</p>
        </div>
        <div className={styles.certificateCard}>
          <img src={certificate3} alt="Certificate 2" />
          <p>Intermediate Froented Developer Certificate</p>
        </div>
        <div className={styles.certificateCard}>
          <img src={certificate1} alt="Certificate 3" />
          <p>Advanced Froented Developer Certificate</p>
        </div>
        <div className={styles.certificateCard}>
          <img src={certificate4} alt="Certificate 4" />
          <p>Beginner Backend Developer Certificate</p>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
