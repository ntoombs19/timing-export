// import { DataGridPremium, GridColDef } from '@mui/x-data-grid-premium';
import useTimingApi from '../../hooks/api/timing/useTimingApi';
import { useEffect, useState } from 'react';

const TaskTable = () => {
    const [timeEntries, setTimeEntries] = useState<object>({});
    const { getTimeEntries } = useTimingApi({ setTimeEntries });

    useEffect(() => {
        getTimeEntries();
    }, [getTimeEntries]);

    return <div>{JSON.stringify(timeEntries)}</div>;
};

export default TaskTable;
