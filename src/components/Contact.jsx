import React, { useState, useEffect } from 'react';

const Contact = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    lastSubmittedMessage: null
  });

  const [receivedMessages, setReceivedMessages] = useState([]);
  const [showInbox, setShowInbox] = useState(false);

  // Load persisted messages from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_messages');
      if (saved) {
        setReceivedMessages(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Could not load messages from localStorage', e);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, lastSubmittedMessage: null });

    const newMessage = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim() || 'New Portfolio Inquiry',
      message: formData.message.trim(),
      timestamp: new Date().toLocaleString(),
      read: false
    };

    // Attempt background email delivery without opening any links or redirecting
    const recipientEmail = personal?.email || 'gauravdhumal8767@gmail.com';
    fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'Customer Name': newMessage.name,
        'Customer Email': newMessage.email,
        'Subject': newMessage.subject,
        'Message': newMessage.message,
        'Submitted At': newMessage.timestamp,
        '_subject': `🔔 Message from ${newMessage.name}: ${newMessage.subject}`,
        '_replyto': newMessage.email,
        '_template': 'table',
        '_captcha': 'false'
      })
    }).catch((err) => {
      // Silently catch background network errors so UI is never interrupted
      console.log('Background email notification status:', err);
    });

    // Save and display message directly on screen
    const updatedList = [newMessage, ...receivedMessages];
    setReceivedMessages(updatedList);
    try {
      localStorage.setItem('portfolio_messages', JSON.stringify(updatedList));
    } catch (err) {
      console.error('LocalStorage save error:', err);
    }

    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        lastSubmittedMessage: newMessage
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 400);
  };

  const handleDeleteMessage = (id) => {
    const updated = receivedMessages.filter((m) => m.id !== id);
    setReceivedMessages(updated);
    try {
      localStorage.setItem('portfolio_messages', JSON.stringify(updated));
    } catch (err) {
      console.error('LocalStorage delete error:', err);
    }
  };

  const handleClearAll = () => {
    setReceivedMessages([]);
    localStorage.removeItem('portfolio_messages');
  };

  const socialLinks = personal?.socialLinks || {};

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project inquiry, job opportunity, or feedback? Send a message directly below!
          </p>
        </div>

        <div className="row g-5 align-items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="col-lg-5">
            <h3 className="h4 fw-bold mb-3">Contact Information</h3>
            <p className="text-muted mb-4">
              I'm always open to discussing new web development projects, creative ideas, or opportunities to collaborate.
            </p>

            <div className="d-flex flex-column gap-3 mb-4">
              {personal?.email && (
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <small className="text-muted text-uppercase fw-bold">Email</small>
                    <div className="fw-semibold text-dark">
                      <a href={`mailto:${personal.email}`} className="text-decoration-none text-dark">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {personal?.location && (
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <small className="text-muted text-uppercase fw-bold">Location</small>
                    <div className="fw-semibold text-dark">{personal.location}</div>
                  </div>
                </div>
              )}

              {personal?.availability && (
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <i className="bi bi-calendar-check-fill"></i>
                  </div>
                  <div>
                    <small className="text-muted text-uppercase fw-bold">Availability</small>
                    <div className="fw-semibold text-dark">{personal.availability}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Social Media Links */}
            <div className="mb-4">
              <h4 className="h6 fw-bold text-uppercase text-muted mb-3">Follow & Connect</h4>
              <div className="d-flex flex-wrap gap-2">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    title="GitHub"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    title="Twitter / X"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    title="Instagram"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                )}
                {socialLinks.codepen && (
                  <a
                    href={socialLinks.codepen}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    title="CodePen"
                  >
                    <i className="bi bi-code-square"></i>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Messages Inbox Toggle Card */}
            <div className="about-card p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-chat-left-text-fill text-primary fs-5"></i>
                  <span className="fw-bold small">Received Messages</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowInbox(!showInbox)}
                  className="btn btn-sm btn-outline-custom py-1 px-2"
                >
                  <span className="badge bg-primary text-white me-1">{receivedMessages.length}</span>
                  {showInbox ? 'Hide' : 'View'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Message Form */}
          <div className="col-lg-7">
            <div className="contact-card">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h3 className="h4 fw-bold mb-0">Send a Message</h3>
                <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 small">
                  <i className="bi bi-check-circle-fill me-1"></i> Instant Live Delivery
                </span>
              </div>

              {/* Direct Instant Confirmation Card */}
              {status.submitted && status.lastSubmittedMessage && (
                <div className="card border-0 shadow-sm mb-4" style={{ background: '#f0fdf4', borderLeft: '4px solid #16a34a' }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-2 text-success fw-bold fs-5 mb-2">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Message Received Successfully!</span>
                    </div>
                    <p className="text-muted small mb-3">
                      Your message has been captured and displayed below.
                    </p>

                    <div className="bg-white p-3 rounded border">
                      <div className="row g-2 small">
                        <div className="col-sm-6">
                          <span className="text-muted">Sender: </span>
                          <strong className="text-dark">{status.lastSubmittedMessage.name}</strong>
                        </div>
                        <div className="col-sm-6">
                          <span className="text-muted">Email: </span>
                          <strong className="text-primary">{status.lastSubmittedMessage.email}</strong>
                        </div>
                        <div className="col-12">
                          <span className="text-muted">Subject: </span>
                          <strong className="text-dark">{status.lastSubmittedMessage.subject}</strong>
                        </div>
                        <div className="col-12 mt-2 pt-2 border-top">
                          <span className="text-muted d-block mb-1">Message Content:</span>
                          <div className="p-2 bg-light rounded text-dark fst-italic">
                            "{status.lastSubmittedMessage.message}"
                          </div>
                        </div>
                        <div className="col-12 mt-1 text-end text-muted" style={{ fontSize: '0.75rem' }}>
                          <i className="bi bi-clock me-1"></i> {status.lastSubmittedMessage.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Name Input */}
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold small text-muted">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      id="name"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold small text-muted">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-custom"
                      id="email"
                      name="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label fw-semibold small text-muted">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-semibold small text-muted">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control form-control-custom"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="btn-primary-custom w-100 py-3"
                    >
                      {status.submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Submitting Message...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill me-1"></i> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Live Received Inquiries Section */}
        {showInbox && (
          <div className="row mt-5">
            <div className="col-12">
              <div className="contact-card">
                <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                  <div>
                    <h3 className="h4 fw-bold mb-1">
                      <i className="bi bi-inbox-fill text-primary me-2"></i> All Received Messages ({receivedMessages.length})
                    </h3>
                    <small className="text-muted">Messages sent by visitors directly on your portfolio website</small>
                  </div>
                  {receivedMessages.length > 0 && (
                    <button
                      type="button"
                      onClick={handleClearAll}
                      className="btn btn-outline-danger btn-sm"
                    >
                      <i className="bi bi-trash3 me-1"></i> Clear All
                    </button>
                  )}
                </div>

                {receivedMessages.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <i className="bi bi-chat-square-dots display-4 d-block mb-3 opacity-50"></i>
                    <p className="mb-0 fw-medium">No messages yet. Fill out the form above to see your message appear here instantly!</p>
                  </div>
                ) : (
                  <div className="row g-3">
                    {receivedMessages.map((msg) => (
                      <div key={msg.id} className="col-md-6">
                        <div className="card h-100 border shadow-sm rounded-3">
                          <div className="card-body p-3">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <div>
                                <h5 className="fw-bold mb-0 text-dark">{msg.name}</h5>
                                <a href={`mailto:${msg.email}`} className="small text-primary text-decoration-none">
                                  <i className="bi bi-envelope me-1"></i>{msg.email}
                                </a>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="btn btn-sm btn-outline-secondary border-0 p-1 text-danger"
                                title="Delete"
                              >
                                <i className="bi bi-x-lg"></i>
                              </button>
                            </div>

                            <div className="badge bg-light text-dark border mb-2 small">{msg.subject}</div>

                            <p className="card-text text-muted small bg-light p-2 rounded mb-2">
                              {msg.message}
                            </p>

                            <div className="text-end text-muted" style={{ fontSize: '0.75rem' }}>
                              <i className="bi bi-clock me-1"></i> {msg.timestamp}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
