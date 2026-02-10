const { 
    generateFibonacci, 
    findPrimes, 
    calculateHCF, 
    calculateLCM,
    getAIResponse 
} = require('../utils/calculations');

const OFFICIAL_EMAIL = process.env.OFFICIAL_EMAIL || "abc123@chitkara.edu.in";

class BfhlController {
    static async handlePost(req, res) {
        try {
            const body = req.body;
            const key = Object.keys(body)[0];
            let data;
            
            switch(key) {
                case 'fibonacci':
                    data = generateFibonacci(body[key]);
                    break;
                    
                case 'prime':
                    data = findPrimes(body[key]);
                    break;
                    
                case 'lcm':
                    data = calculateLCM(body[key]);
                    break;
                    
                case 'hcf':
                    data = calculateHCF(body[key]);
                    break;
                    
                case 'AI':
                    // Using predefined responses for reliability
                    data = getAIResponse(body[key]);
                    break;
            }
            
            // For Bajaj Finserv Health Limited 
            const companyData = {
                company: "Bajaj Finserv Health Limited",
                developers_count: 1000000,
                industry: "Healthcare Technology",
                services: ["Telemedicine", "Doctor Appointments", "Medicine Delivery", "Health Records"]
            };
            
            res.status(200).json({
                is_success: true,
                official_email: OFFICIAL_EMAIL,
                company_info: companyData,
                user_id: "john_doe_17092001",
                data: data
            });
            
        } catch (error) {
            res.status(500).json({
                is_success: false,
                error: error.message
            });
        }
    }
    
    static async handleHealth(req, res) {
        try {
            res.status(200).json({
                is_success: true,
                official_email: OFFICIAL_EMAIL,
                server_status: "healthy",
                timestamp: new Date().toISOString(),
                version: "1.0.0"
            });
        } catch (error) {
            res.status(500).json({
                is_success: false,
                error: error.message
            });
        }
    }
}

module.exports = BfhlController;