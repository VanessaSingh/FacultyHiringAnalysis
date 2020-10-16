import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class RadialChart extends Component {
    state = {}
    componentDidMount() {
        // For initial animation
        setTimeout(() => {
            this.setState({ set_outer_stroke_len: true , set_inner_stroke_len: true});
        });
    }
    render() {
        const { set_outer_stroke_len, set_inner_stroke_len } = this.state;
        const {
            className,
            outer_circle_colour, 
            inner_circle_colour, 
            outer_circle_completion, 
            inner_circle_completion
        } = this.props;
        const stroke_width = 10;
        const size = 200;

        const outer_radius = 80;
        const outer_circumference = 2 * 3.14 * outer_radius;
        
        const inner_radius = 50;
        
        const inner_circumference = 2 * 3.14 * inner_radius;
        
        const outer_stroke_len = set_outer_stroke_len ? outer_circumference / 100 * outer_circle_completion : 0;
        const inner_stroke_len = set_inner_stroke_len ? inner_circumference / 100 * inner_circle_completion : 0;
        
        return (
                <div
                        className={classNames('radial-chart', className, {
                            'no-outer_circle_completion': outer_stroke_len === 0
                        })}
                >
                    <svg viewBox="0 0 180 180" width={size} height={size}>
                        <circle
                            className="radial-chart-total"
                            stroke={outer_circle_colour}
                            fill={outer_circle_colour}
                            
                            cx="90"
                            cy="90"
                            r={outer_radius}
                            
                        />
                        <circle
                            className="radial-chart-outer_circle_completion"
                            stroke={outer_circle_colour}
                            fill={outer_circle_colour}
                            
                            strokeLinecap="round"
                            
                            cx="90"
                            cy="90"
                            r={outer_radius}
                        />
                        <circle
                            className="radial-chart-total"
                            stroke={inner_circle_colour}
                            fill={inner_circle_colour}
                            
                            cx="90"
                            cy="90"
                            r={inner_circle_completion}
                        />
                        <circle
                            className="radial-chart-outer_circle_completion"
                            stroke={inner_circle_colour}
                            fill={inner_circle_colour}
                            
                            strokeLinecap="round"
                            
                            cx="90"
                            cy="90"
                            r={inner_circle_completion}
                        />
                    </svg>
                </div>
                );
            }
}

RadialChart.propTypes = {
    className: PropTypes.string,
    outer_circle_colour: PropTypes.string,
    inner_circle_colour: PropTypes.string,
};
export default RadialChart;