import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Vous avez des soupcons que c'est peut-etre une fraude , Ne Faite rien avant d'avoir lus un des arcticles suivant..
      </h2>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Votre reference ce qui as trais aux fraude.
      </h4>
    </section>
  )
}
