function validateBfhlRequest(req, res, next) {
    const body = req.body;
    const keys = Object.keys(body);
    
    if (keys.length !== 1) {
        return res.status(400).json({
            is_success: false,
            error: "Request must contain exactly one of: fibonacci, prime, lcm, hcf, AI"
        });
    }
    
    const validKeys = ['fibonacci', 'prime', 'lcm', 'hcf', 'AI'];
    const key = keys[0];
    
    // if key is valid 
    if (!validKeys.includes(key)) {
        return res.status(400).json({
            is_success: false,
            error: `Invalid key. Must be one of: ${validKeys.join(', ')}`
        });
    }
    
    // Validate based on key
    switch(key) {
        case 'fibonacci':
            if (typeof body[key] !== 'number' || body[key] < 0) {
                return res.status(400).json({
                    is_success: false,
                    error: "Fibonacci must be a non-negative integer"
                });
            }
            break;
            
        case 'prime':
        case 'lcm':
        case 'hcf':
            if (!Array.isArray(body[key]) || body[key].length === 0) {
                return res.status(400).json({
                    is_success: false,
                    error: `${key} must be a non-empty array of numbers`
                });
            }
            
            req.body[key] = body[key].map(Number);
            if (req.body[key].some(isNaN)) {
                return res.status(400).json({
                    is_success: false,
                    error: `${key} must contain only valid numbers`
                });
            }
            break;
            
        case 'AI':
            if (typeof body[key] !== 'string' || body[key].trim().length === 0) {
                return res.status(400).json({
                    is_success: false,
                    error: "AI question must be a non-empty string"
                });
            }
            break;
    }
    
    next();
}

module.exports = { validateBfhlRequest };