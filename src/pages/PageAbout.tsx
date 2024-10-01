export const PageAbout = () => {

	const online = false;

	return (
		<>
			<p>I use this site to learn languages. See <a className="underline" target="_blank" href="https://tanguay-eu.vercel.app">more of my projects</a>.</p>

			{
				online ? (
					<p>I am online.</p>
				) : (
					<p>not online</p>
				)
			}
		</>
	)
}
