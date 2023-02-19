<template>
	<div class="item">
		<div class="who">
			<div class="wrap">
				<img :src=comment.avatar alt="Аватар" class="avatar">
			</div>

			<div class="column">
				<div class="name">{{ comment.name }}</div>
				<div class="when">{{ comment.when }}</div>
			</div>
		</div>

		<p class="comment">{{ comment.comment }}</p>

		<a href="#" class="to-answer">ответить</a>

		<div class="answers" v-if="comment.answers.length >= 0">
			<div 
				class="answer"
				v-for="answer in comment.answers"
				:key="answer.id">
				
				<div class="who">
					<div class="wrap">
						<img :src=answer.avatar alt="Аватар" class="avatar">
					</div>

					<div class="column">
						<div class="name">{{ answer.name }}</div>
						<div class="when">{{ answer.when }}</div>
					</div>
				</div>

				<p class="comment">{{ answer.comment }}</p>

				<a href="#" class="to-answer">ответить</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		comment: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.item
	width: 100%

.who
	display: flex

	& .wrap
		width: 30px
		height: 30px
		border-radius: 50%

		& .avatar
			width: 100%
			height: 100%
			object-fit: cover
			border-radius: 50%
			background-color: $color-light-gray
	
	& .column
		margin-left: 15px
		
		& .name
			font-family: $font-roboto
			font-weight: 500
			font-size: 12px
			line-height: 14px
			color: $color-full-white
		
		& .when
			margin-top: 2px
			font-family: $font-roboto
			font-weight: 400
			font-size: 12px
			line-height: 14px
			color: $color-dim-gray

.comment
	margin-top: 15px
	font-family: $font-roboto
	font-weight: 400
	font-size: 12px
	line-height: 14px
	color: $color-full-white

.to-answer
	margin-top: 5px
	font-family: $font-roboto
	font-weight: 400
	font-size: 12px
	line-height: 14px
	text-decoration: none
	color: $color-light-blue

.answers
	margin-left: 30px

.answer
	margin-top: 30px
</style>