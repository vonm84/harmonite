# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( createjs-2015.11.26.min.js )
Rails.application.config.assets.precompile += %w( Slider.js )
Rails.application.config.assets.precompile += %w( Wedge.js )
Rails.application.config.assets.precompile += %w( Fraction.js )