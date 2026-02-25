import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Mentions légales — Mathieu Spaeth Ostéopathe D.O.',
  description: 'Mentions légales du site ms-osteopathe.fr',
}

export default function MentionsLegales() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        <Link href="/" className={styles.back}>← Retour au site</Link>

        <h1 className={styles.title}>Mentions légales</h1>

        <section className={styles.section}>
          <h2>Informations légales</h2>
          <h3>Présentation du site</h3>
          <p>
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <strong>https://www.ms-osteopathe.fr/</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <ul>
            <li><strong>Propriétaire :</strong> Mathieu Spaeth – 83112824400017</li>
            <li><strong>Responsable publication :</strong> Mathieu Spaeth – contact@ms-osteopathe.fr</li>
            <li><strong>Hébergeur :</strong> OVH – 2 rue Kellermann – BP 80157 – 59053 Roubaix Cedex 1</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Conditions générales d'utilisation</h2>
          <p>
            L'utilisation du site <strong>https://www.ms-osteopathe.fr/</strong> implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
          </p>
          <p>
            Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par Mathieu Spaeth, qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention.
          </p>
          <p>
            Le site est mis à jour régulièrement. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s'imposent néanmoins à l'utilisateur qui est invité à s'y référer le plus souvent possible afin d'en prendre connaissance.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Description des services fournis</h2>
          <p>
            Le site <strong>https://www.ms-osteopathe.fr/</strong> a pour objet de fournir une information concernant l'ensemble des activités de Mathieu Spaeth, ostéopathe D.O. à Castelnau-le-Lez.
          </p>
          <p>
            Mathieu Spaeth s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p>
            Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d'évoluer. Elles sont données sous réserve de modifications ayant été apportées depuis leur mise en ligne.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Limitations contractuelles sur les données techniques</h2>
          <p>
            Le site utilise les technologies JavaScript et Next.js. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Propriété intellectuelle et contrefaçons</h2>
          <p>
            Mathieu Spaeth est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Mathieu Spaeth.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Limitations de responsabilité</h2>
          <p>
            Mathieu Spaeth ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>
          <p>
            Mathieu Spaeth ne pourra également être tenu responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site.
          </p>
          <p>
            Les espaces interactifs (formulaire de contact) sont à la disposition des utilisateurs. Mathieu Spaeth se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, notamment aux dispositions relatives à la protection des données.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Gestion des données personnelles</h2>
          <p>
            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et le Règlement Général sur la Protection des Données (RGPD).
          </p>
          <p>
            À l'occasion de l'utilisation du site, peuvent être recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site, le fournisseur d'accès de l'utilisateur, l'adresse IP de l'utilisateur.
          </p>
          <p>
            Mathieu Spaeth ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie.
          </p>
          <p>
            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande à l'adresse : <a href="mailto:contact@ms-osteopathe.fr">contact@ms-osteopathe.fr</a>
          </p>
          <p>
            Aucune information personnelle de l'utilisateur n'est publiée à son insu, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Liens hypertextes et cookies</h2>
          <p>
            Le site contient un certain nombre de liens hypertextes vers d'autres sites. Cependant, Mathieu Spaeth n'a pas la possibilité de vérifier le contenu des sites ainsi visités et n'assumera en conséquence aucune responsabilité de ce fait.
          </p>
          <p>
            La navigation sur le site est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site et à permettre diverses mesures de fréquentation.
          </p>
          <p>
            L'utilisateur peut configurer son navigateur pour refuser l'installation des cookies via les paramètres de confidentialité de son navigateur (Chrome, Firefox, Safari, Edge).
          </p>
        </section>

        <section className={styles.section}>
          <h2>Droit applicable et attribution de juridiction</h2>
          <p>
            Tout litige en relation avec l'utilisation du site <strong>https://www.ms-osteopathe.fr/</strong> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Montpellier.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principales lois concernées</h2>
          <ul>
            <li>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</li>
            <li>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</li>
            <li>Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (RGPD).</li>
          </ul>
        </section>

        <p className={styles.updated}>Dernière mise à jour : janvier 2026</p>

        <Link href="/" className={styles.back}>← Retour au site</Link>

      </div>
    </main>
  )
}