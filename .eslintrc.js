module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jquery': true
    },
    'extends': ['airbnb-base', 'plugin:prettier/recommended'],
    'plugins': ['prettier',  'more-naming-conventions'],
    'rules': {
        'prettier/prettier': ['error']
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'script'
    },
    'rules': {
        'more-naming-conventions/snake-case-variables': 'error',
        'no-unused-vars': [
            'error',
            {
                'vars': 'local',
                'args': 'none',
            },
        ],
        'camelcase': 'off',
        'no-new': 'off',
        'no-param-reassign': [
            'error',
            {
                'props': false,
            },
        ],
        'no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': true,
                'allowTernary': true,
            },
        ],
    },
    'globals': {
        'L': 'readonly',
        'ArnMapDispatcher': 'readonly',
        'places': 'readonly'
    },
};