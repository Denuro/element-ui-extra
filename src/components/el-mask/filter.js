import masker from './masker'
import tokens from './tokens'

export default function(val, binding) {
	var config = binding || {}
    if (Array.isArray(config) || typeof config === 'string') {
      config = {
        masked: true,
        mask: config,
        tokens: tokens
      }
    }

	return masker(val, config.mask, config.masked, config.tokens)
}