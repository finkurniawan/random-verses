import {Component} from 'react';

interface QuoteCardProps {
    quote: string;
    author: string;
}

class QuoteCard extends Component<QuoteCardProps> {
    render() {
        const {quote, author} = this.props;

        return (
            <div
                className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 scale-up">
                <p className="text-lg font-semibold mb-4">"{quote}"</p>
                <p className="text-md text-right">— {author}</p>
            </div>
        );
    }
}

export default QuoteCard;
