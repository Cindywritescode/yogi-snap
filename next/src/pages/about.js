import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import Link from 'next/link';

export default function about() {
  return (
    <Container>
      <section
        className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-32 lg:px-8"
      >
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">About YogiSnap</h2>
          <p className="my-8 text-xl font-light">
            This is a MSc research project at the Roehampton University. The project aims to address the issue
            of Roehampton students practising yoga at home without proper guidance and the potential risks of incorrect
            posture and training methods.

            To mitigate this problem, the study proposes the development of an application called
            YogiSnap, which serves as a virtual yoga instructor. YogiSnap utilises machine learning models to recognise
            yoga poses and evaluate users' performance accuracy. The project utilised TensorFlow image classification
            and pose
            detection models.

            The project involves collecting data from various sources, including a ready-made dataset
            from Kaggle and contributions from yoga teachers and students at Roehampton University. <br/>
            <Link href="https://github.com/Cindywritescode/yogi-snap-models"
                  className="underline text-indigo-700">
              GitHub Link
            </Link>
          </p>


          <Logo className="mt-8"/>
        </div>
      </section>
    </Container>
  );
}