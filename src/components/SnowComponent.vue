<template>
        <vue-particles
            id="tsparticles"
            class="snow"
            :options="{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
        />
</template>

<script setup>

 
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Mountains+of+Christmas');

.snow {
	position: absolute;
	z-index: 100;
	width: 100%;
	height: 100%;
}

.trees {
	display: grid;
	grid-template-rows: 50% 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/25839/trees.svg) repeat-x;
	position: relative;
	width: 100%;
	height: 500px;
}

.merry {
	color: #c84257;
	font-family: 'Mountains of Christmas';
	text-align: center;
	grid-row: 1;
	grid-column: 1/4;
	align-self: center;
	justify-self: center;
	font-size: 6rem;
}

.fox {
	grid-column: 3;
	grid-row: 3;
	align-self: end;
	justify-self: start;
	position: relative;
}

.tree {
	align-self: end;
	justify-self: end;
	grid-column: 1;
	grid-row: 3;
}
</style>