import React from 'react';
import { Form, Input, Button } from 'antd';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="cosmic-background flex items-center justify-center px-6 pt-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-lg bg-space-black/90 p-8 rounded-xl border-2 border-cosmic-purple/20 shadow-lg"
            >
                <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cosmic-purple to-stellar-blue text-transparent bg-clip-text mb-8">
                    Contact Me
                </h2>
                <Form layout="vertical">
                    <Form.Item label={<span className="text-star-white">Name</span>}>
                        <Input
                            placeholder="Your Name"
                            className="bg-space-black border-cosmic-purple/50 text-star-white hover:border-stellar-blue"
                        />
                    </Form.Item>
                    <Form.Item label={<span className="text-star-white">Email</span>}>
                        <Input
                            placeholder="Your Email"
                            className="bg-space-black border-cosmic-purple/50 text-star-white hover:border-stellar-blue"
                        />
                    </Form.Item>
                    <Form.Item label={<span className="text-star-white">Message</span>}>
                        <Input.TextArea
                            rows={4}
                            placeholder="Your Message"
                            className="bg-space-black border-cosmic-purple/50 text-star-white hover:border-stellar-blue"
                        />
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full bg-gradient-to-r from-cosmic-purple to-stellar-blue border-0 hover:scale-105 transition-transform"
                    >
                        Send Message
                    </Button>
                </Form>
            </motion.div>
        </div>
    );
};

export default Contact;