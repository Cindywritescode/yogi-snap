# YogiSnap

This project is developing with Next.js framework and TensorFlow models.

The project aiming to utilise TensorFlow.js pose-detecting models (BlazeNet)
to recognise yoga poses and analyse the accuracy of a user's yoga postures.

## Getting Started Next.js

First, change directory into next folder, <br>
then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

<hr>

## Getting Started TensorFlow

This folder use Yarn to run the dependencies.

```bash
yarn i
```

The below dependency needs to link it locally

```bash
yarn link @tensorflow-models/pose-detection
```

The dependency to be add-in

```bash
yarn add @tensorflow/tfjs-backend-webgl
```

<br>

### Evaluation

Command line in terminal to run the pose evaluation model

```bash
node evaluate_pose_blazepose.js ~/Downloads/YogaPoses/Downdog/00000037.jpg
```

(multiple files)

```bash
node evaluate_pose_blazepose.js ~/Downloads/YogaPoses/Downdog/00000*.jpg 
```

<br>

### Utilities
(Command line in terminal) 

Combine the csv files
```sh
csvstack ~/Downloads/YogaPoses/Downdog/*.csv > tensorflow/combined_degree_2.csv     
```

Copy image from other folder to project
```bash
cp ~/Downloads/YogaPoses/Warrior2/00000*.jpg next/public/warrior2
cp ~/Downloads/YogaPoses/Warrior2/00000*.json next/public/data/warrior2
```

copy files
```bash
mv ~/Downloads/YogaPoses/Downdog/0000000* next/public/downdog    
```