import React, {Component} from 'react';
import classes from './Filter.css';
import SearchIcon from '@material-ui/icons/Search';
import SelectFilter from '../../UI/SelectFilter/SelecteFilter'; 
import FILTER_ENUMS from '../../../utils/enums';
class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state= {
            jobType: '',
            jobStatus: ''
        }
    }
    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.FilterContainer}>
                    <div className={classes.FilterArea}>
                        <div className={classes.FilterText}>Filter</div>
                        <div className={classes.Filters}>
                        {/* Filters */}
                            {
                                FILTER_ENUMS.map(filter=> {
                                    return <SelectFilter key={filter.filterName} filterLabel={filter.filterName} filterItems={filter.items}/>
                                })
                            }
                        </div>
                    </div>
                    <div className={classes.Search}>
                        <SearchIcon style={{color: '#fff', transform: 'scale(1.1)'}}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default FilterBar;