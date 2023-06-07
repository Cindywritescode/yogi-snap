import { useId } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from './Container';
import cameraSetup from '../../public/images/cameraSetup.png';
import doPose from '../../public/images/do-pose.png';
import result from '../../public/images/result.png';

const features = [
  {
    name: 'Camera Setup',
    summary: 'Setup camera to capture the whole body',
    description:
      'Put your device somewhere stable and stay back until you can see your full body inside the screen.',
    image: cameraSetup,
  },
  {
    name: 'Start Posing',
    summary:
      'Start to do the yoga pose ',
    description:
      'After the camera setup, you can start to do yoga pose by following the instruction on screen and audio.',
    image: doPose,
  },
  {
    name: 'Get Marks',
    summary:
      'Get the performance report',
    description:
      'The performance report will show the percentage of the accuracy of your pose and display your best perform yoga pose',
    image: result,
  },
];

const Feature = ({ feature, isActive, className, ...props }) => (
  <div
    className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
    {...props}
  >
    <Image
      className="w-full"
      src={feature.image}
      alt=""
      sizes="25rem"
    />
    <h3
      className={clsx(
        'mt-6 text-sm font-medium',
        isActive ? 'text-blue-600' : 'text-slate-600'
      )}
    >
      {feature.name}
    </h3>
    <p className="mt-2 font-display text-xl text-slate-900">
      {feature.summary}
    </p>
    <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
  </div>
);

const FeaturesMobile = () => (
  <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
    {features.map((feature) => (
      <div key={feature.name}>
        <Feature feature={feature} className="mx-auto max-w-2xl" isActive/>
      </div>
    ))}
  </div>
);

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0"/>
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
        </>
      )}
    </Tab.Group>
  );
}

export function PrimaryFeatures() {
  return (
    <section
      id="primary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            3 steps to get your yoga poses marks
          </p>
        </div>
        <FeaturesMobile/>
        <FeaturesDesktop/>
      </Container>
    </section>
  );
}
