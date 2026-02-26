// src/app/faq/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './faq.module.css'

export const metadata: Metadata = {
  title: 'FAQ — Mathieu Spaeth Ostéopathe D.O.',
  description: 'Toutes vos questions sur l\'ostéopathie, les séances, les tarifs et la prise en charge. Mathieu Spaeth, ostéopathe D.O. à Castelnau-le-Lez.',
}

const FAQ_SECTIONS = [
  {
    category: 'Questions générales sur l\'ostéopathie',
    questions: [
      {
        q: 'Que fait un ostéopathe ?',
        a: 'Un ostéopathe est un professionnel de la santé formé à l\'évaluation et au traitement des troubles fonctionnels par des techniques manuelles adaptées. Son approche repose sur l\'idée que structure et fonction sont intimement liées : en travaillant sur les restrictions articulaires et tissulaires, il agit sur l\'ensemble des structures du corps afin de favoriser un meilleur équilibre global.',
      },
      {
        q: 'Ai-je besoin d\'une ordonnance pour consulter ?',
        a: 'Non, aucune ordonnance n\'est nécessaire. L\'ostéopathe est un praticien de première intention depuis 2007. Vous pouvez prendre rendez-vous directement sans passer par votre médecin. Toutefois, si votre ostéopathe identifie une pathologie ne relevant pas de son champ de compétences, il vous orientera vers le professionnel de santé approprié.',
      },
      {
        q: 'L\'ostéopathie est-elle remboursée ?',
        a: 'L\'ostéopathie n\'est pas remboursée par la Sécurité Sociale, mais de nombreuses mutuelles prennent en charge tout ou partie des séances. Je vous conseille de vérifier votre contrat ou de contacter directement votre mutuelle. À l\'issue de la consultation, je vous fournirai une facture avec toutes les informations nécessaires.',
      },
      {
        q: 'Est-ce que l\'ostéopathe fait obligatoirement « craquer » ?',
        a: 'Non. Les manipulations avec « craquement » ne représentent qu\'une partie des techniques disponibles. J\'adapte mes techniques à chaque patient. Dans tous les cas, je vous explique ce que je fais et j\'obtiens toujours votre accord avant toute manipulation. Le « crac » est dû à un phénomène de cavitation — c\'est sans danger.',
      },
      {
        q: 'Combien de séances seront nécessaires ?',
        a: 'Dans la majorité des cas, une seule séance suffit pour traiter un trouble fonctionnel. En revanche, lors d\'épisodes aigus (torticolis, lumbago), une ou deux séances rapprochées peuvent être nécessaires. En dehors d\'un contexte douloureux, je recommande une séance de suivi tous les six mois à visée préventive.',
      },
      {
        q: 'Combien de temps dure une séance ?',
        a: 'Une séance dure généralement 45 minutes à 1 heure. La première consultation peut être légèrement plus longue car elle comprend un interrogatoire détaillé, un examen clinique et le traitement.',
      },
      {
        q: 'Comment se déroule une séance d\'ostéopathie ?',
        a: 'La consultation se présente en 4 temps : (1) L\'anamnèse (10-15 min) — questions sur vos antécédents et symptômes. (2) L\'examen ostéopathique (10-15 min) — identification des zones de tension. (3) Le traitement (20-30 min) — techniques structurelles, viscérales, crâniennes. (4) Les conseils (5 min) — recommandations personnalisées.',
      },
      {
        q: 'Quelle est la différence entre ostéopathe, kinésithérapeute et chiropracteur ?',
        a: 'Le kinésithérapeute intervient principalement en rééducation fonctionnelle, souvent sur prescription médicale. Le chiropracteur est spécialisé dans les troubles de la colonne vertébrale. L\'ostéopathe adopte une approche globale du corps avec des techniques manuelles variées pour restaurer la mobilité et favoriser un meilleur équilibre fonctionnel. Ces trois professions sont complémentaires.',
      },
    ],
  },
  {
    category: 'Ostéopathie et grossesse',
    questions: [
      {
        q: 'Peut-on consulter un ostéopathe pendant la grossesse ?',
        a: 'Oui, tout à fait ! L\'ostéopathie est même fortement recommandée pendant la grossesse. J\'adapte mes techniques pour garantir votre sécurité et celle de votre bébé. Elle peut aider pour les douleurs lombaires et sciatiques, les reflux gastriques, les troubles du sommeil, la préparation du bassin à l\'accouchement, et bien d\'autres.',
      },
      {
        q: 'Puis-je consulter même si je ne peux pas rester allongée sur le dos ?',
        a: 'Oui ! Je peux vous installer sur le côté, assise sur un ballon ou semi-assise. Le traitement sera tout aussi efficace.',
      },
    ],
  },
  {
    category: 'Ostéopathie du sport',
    questions: [
      {
        q: 'Doit-on davantage consulter un ostéopathe lorsque l\'on est sportif ?',
        a: 'Oui, les sportifs peuvent bénéficier de consultations plus régulières. La consultation préventive permet d\'identifier et corriger les déséquilibres avant qu\'ils ne provoquent des blessures, d\'optimiser la mobilité et la récupération. Pour un sportif amateur, une séance tous les 6 à 12 mois peut suffire.',
      },
      {
        q: 'L\'ostéopathie peut-elle soigner une tendinite ?',
        a: 'Oui, l\'ostéopathie est très efficace pour les tendinopathies dans une prise en charge globale. Mon approche consiste à identifier la cause (déséquilibre postural, surcharge), traiter globalement (relâcher les tensions, rééquilibrer les chaînes musculo-fasciales), puis conseiller et prévenir (adapter l\'entraînement, exercices spécifiques). À noter : un tendon met 3 à 6 semaines minimum pour cicatriser.',
      },
      {
        q: 'Comment savoir si ma douleur est grave ?',
        a: 'Consultez rapidement en cas de douleur brutale et intense, gonflement important, impossibilité de bouger, ou craquement audible lors d\'une blessure. Consultez dans les jours suivants si la douleur modérée persiste depuis plus d\'une semaine, ou en cas de sensation de blocage. Vous pouvez probablement continuer le sport pour de légères courbatures post-effort.',
      },
    ],
  },
  {
    category: 'Pratique et organisation',
    questions: [
      {
        q: 'Comment prendre rendez-vous ?',
        a: 'Vous pouvez prendre rendez-vous en ligne sur Doctolib (disponible 24h/24) ou par téléphone au 06 15 93 84 74.',
      },
      {
        q: 'Que dois-je apporter à ma consultation ?',
        a: 'Pour optimiser la séance, pensez à apporter vos examens médicaux récents (radio, IRM, scanner), la liste de vos traitements en cours, et des vêtements confortables. Vous pouvez rester habillé(e).',
      },
      {
        q: 'Dois-je me déshabiller ?',
        a: 'Non, vous pouvez rester habillé(e). Privilégiez simplement des vêtements souples (legging, t-shirt). Dans de très rares cas, pour certaines techniques spécifiques, je peux vous demander de retirer un vêtement — toujours avec votre accord.',
      },
      {
        q: 'Vais-je avoir mal après la séance ?',
        a: 'Il est possible de ressentir de légères courbatures (24-72h) ou une sensation de fatigue. Ces réactions sont normales et disparaissent généralement en 2-3 jours. Si les douleurs persistent, contactez-moi.',
      },
      {
        q: 'Combien coûte une séance ?',
        a: 'Séance classique adulte : 60 € — Pack sportif : 80 € — Enfant (4-15 ans) : 40 € — Étudiant (16-21 ans) : 50 € — Séance à domicile : 70 €. Moyens de paiement acceptés : espèces, paiements mobile, chèque, virements. Une facture vous sera délivrée pour remboursement mutuelle.',
      },
      {
        q: 'Vous déplacez-vous à domicile ?',
        a: 'Oui ! Je propose des consultations à domicile pour les personnes à mobilité réduite, les personnes âgées, les post-opératoires, les lumbagos aigus et les jeunes mamans. Zone de déplacement : les communes de l\'Est de Montpellier (me contacter pour confirmer).',
      },
    ],
  },
  {
    category: 'Questions diverses',
    questions: [
      {
        q: 'L\'ostéopathie peut-elle tout soigner ?',
        a: 'Non. L\'ostéopathie est très efficace pour les troubles fonctionnels (douleurs articulaires, musculaires, digestives), mais elle ne traite pas les pathologies organiques (cancer, infection, fracture, etc.). Je suis formé pour identifier ce qui relève ou non de mes compétences et vous réorienterai si nécessaire.',
      },
      {
        q: 'L\'ostéopathie est-elle reconnue en France ?',
        a: 'Oui, l\'ostéopathie est reconnue en France depuis la loi de 2002, et les décrets de 2007 ont encadré les conditions d\'exercice et de formation. Les ostéopathes sont inscrits au RPPS (Répertoire Partagé des Professionnels de Santé), ce qui renforce leur reconnaissance officielle.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <main className={styles.main}>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/" className={styles.back}>← Retour au site</Link>
          <p className={styles.tag}>FAQ</p>
          <h1 className={styles.title}>Questions <em>fréquentes</em></h1>
          <p className={styles.subtitle}>
            Tout ce que vous souhaitez savoir sur l'ostéopathie, les séances et l'organisation du cabinet.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>

          {FAQ_SECTIONS.map((section) => (
            <div key={section.category} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.category}</h2>
              <div className={styles.questions}>
                {section.questions.map((item) => (
                  <details key={item.q} className={styles.item}>
                    <summary className={styles.question}>
                      <span>{item.q}</span>
                      <span className={styles.icon}>+</span>
                    </summary>
                    <p className={styles.answer}>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.cta}>
            <p className={styles.ctaText}>Vous avez d'autres questions ?</p>
            <div className={styles.ctaActions}>
              <a href="tel:0615938474" className={styles.ctaBtn}>☏ 06 15 93 84 74</a>
              <a
                href="https://www.doctolib.fr/osteopathe/le-cres/mathieu-spaeth"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}
              >
                Prendre rendez-vous →
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}