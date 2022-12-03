const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import '~@/assets/sass/_normalize.sass'
					@import '~@/assets/sass/_mixins.sass'
					@import '~@/assets/sass/_vars.sass'
					@import '~@/assets/sass/_fonts.sass'
				`
			}
		}
	}
});
