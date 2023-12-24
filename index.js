const logger = new (require('./LoggerModule'))({
    timezone: null // Set your timezone here, if you want to override the default one (system default)
});

// Log an error message with key-value pair
logger.error('Something went wrong', 'errorKey', 'errorValue');

// Log a success message with multiple key-value pairs
logger.success('Operation successful', 'key1', 'value1', 'key2', 'value2');

// Log an info message with a license key-value pair
logger.info('Successfully logged in.', 'license', 'XXXXX-XXXXX-XXXXX-XXXXX');

// Log a panic message with a panic key-value pair
logger.panic('This is a panic!', 'panicKey', 'panicValue');

// Log a custom message with yellow color and couple key-value pairs
logger.custom('custom', 'yellow', 'Custom log', {
    logDetails: [
        { name: 'key1', value: 'value1' },
        { name: 'key2', value: 'value2' }
    ]
});

// Log another custom message with background cyan color and couple key-value pairs
logger.custom('another', 'bgCyan', 'Custom log', {
    logDetails: [
        { name: 'param1', value: 'value1' },
        { name: 'param2', value: 'value2' }
    ]
});

// Log an empty custom message with red color (no key-value pairs)
logger.custom('empty', 'red', 'Custom log', {
    logDetails: []
});