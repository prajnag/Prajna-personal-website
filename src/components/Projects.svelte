<script>
	import MediaQuery from './MediaQuery.svelte';
	import MobileProjectCard from './MobileProjectCard.svelte';
	import DefaultProjectCard from './DefaultProjectCard.svelte';
	let events = [
		{
			title: 'Rumour Detection and Veracity Verification',
			event: `Early detection of rumours and assessing their veracity is a key problem. The learning mechanism analyses the socio-linguistic data 
			and the features of the social graph of the Tweet. We first perform a graph and text based rumour detection, followed by classifying the stance of the Tweet. We then finally predict whether the Tweet in question is True or not `,
			url: 'https://github.com/prajnag/Rumour-Detection-and-Veracity-Verification'
		},
		{
			title: 'Cloud Computing - DbaaS - Container Orchestrator',
			event: `This simulates a typical ride-sharing application. The orchestrator exposes the read and write API endpoints. Out of all the running worker containers, one of them is elected as the master. We have used queues for message exchanges. 
			We scale up/down the number of containers based on the number of incoming HTTP requests. We use Zookeeper to ensure fault tolerance.
`,
			url: 'https://github.com/prajnag/Cloud-Computing-Rideshare'
		},
		{
			title: 'Product Expiry Notification System',
			event: `Built a product expiry notification system to scan and predict the expiry date of certain household essentials. 
			Used OCR, Android Studio and an artificial neural network and an ANOVA test to implement the solution.
			This used an adam optimizer, an MSE as its loss function and was finally evaluated on its cosine proximity. We then used a Graph Neural Network (GNN) to compare the functioning of both models.
`,
			url: 'https://github.com/prajnag/Product-Expiry-Notification-System'
		},
		{
			title: 'Lie Detection System - Eagle Strategy',
			event: `This has 3 components - camera for facial features, recording device for voice and IOT devices for body movements. 
			The truth value of every line in a conversation is captured. Based on this value, we have trained our deep neural network to classify the given data as “lie” or “truth”. Further, instead of the generic backpropagation used in a neural network, I used the Eagle Strategy to accomplish the task`,
			url: 'https://github.com/prajnag/Lie-Detection-System'
		},
		{
			title: 'Naive Bayes Classifier',
			event: `This helps classify whether a person is a democrat or a republican based on their votes, using 16 binary attributes and 2 classes. I estimated the accuracy of Naive Bayes algorithm using 5-fold cross validation on the dataset given. 
			Implemented the model from scratch, without using any libraries. 
			A decision tree, using the ID3 algorithm, has also been used to classify data and compare the performances of the two classifiers`,
			url: 'https://github.com/prajnag/Naive-Bayes-Classifier'
		},
		{
			title: 'C++ Compiler using the C Language',
			event: `This is to build a compiler for the C++ programing language, using the C programming language. The compiler handles 'do', 'do-while' loops and 'if' conditional statements. The phases of this project include the lexical, syntactic, semantic analysis. Post that, we work on the intermediate code generation, optimisation and finally generate the target assembly code`,
			url: 'https://github.com/prajnag/cpp-compiler'
		},
		{
			title: 'Stock Market Analysis and Prediction',
			event: `This aims to help users in making decisions when it comes to investing in the stock market. On the basis of data collected over a long period of time, 
			the application uses support vector regression  to predict the upcoming month's price of a stock. It uses Flask and jQuery for the backend, and
			Angluar for the front-end requirements. An appleaing and easy-to-use UI has helped improve the overall UX.`,
			url: 'https://github.com/prajnag/Stock-Market-Analysis'
		},
		{
			title: 'Emotion Detection and Classification in Speech',
			event: `Used the RAVDESS dataset and a CNN to build a system that detects the emotion in an audio sample. Classifies the speech into 3 emotions - calm, happy, sad & happy. 
			Used the librosa library in Python, and extracted the MFCC(Mel Frequency Cepstral Coefficient) from the samples. I used the softmax and rmsprop activation functions and a batch size of 32.`,

			url: 'https://github.com/prajnag/Speech-Emotion-Recognition'
		},
	];
</script>

<section class="flex flex-col  bg-[#fff0f0] md:p-16 p-8" id="projects">
	<h1 class="text-[#85586F] text-2xl text-center md:mb-24 mb-8">Select Research Projects</h1>
	<div class="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
		{#each events as event, ind}
			{#if ind < 12} 
				<MediaQuery query="(max-width: 480px)" let:matches>
					{#if matches}
						<MobileProjectCard title={event.title} event={event.event}  url={event.url}/>
					{:else}
						<DefaultProjectCard title={event.title} event={event.event} url={event.url} />
					{/if}
				</MediaQuery>
			{/if}
		{/each}
	</div>
	<!-- <div class="text-center my-8">
		<p class="text-[#85586F] inline-block px-2 border-2 border-[#85586F] rounded-md">MORE</p>
	</div> -->
</section>
