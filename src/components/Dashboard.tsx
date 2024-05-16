import FileUpload from './FileUpload';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Dashboard = () => {
    const tabNames = ['Upload File', 'AO Action', 'Send AR'];
    const tabPanels = [<FileUpload />, 'AO Action Panel', 'Send AR Panel'];
    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-2">
                    {tabNames.map((tabName) => (
                        <Tab
                            key={tabName}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    'ring-white/40 ring-offset-1 ring-offset-blue-400 focus:outline-none focus:ring-1',
                                    selected
                                        ? 'bg-white text-blue-700 shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {tabName}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {tabPanels.map((tabPanel, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3 text-gray-950',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            {tabPanel}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Dashboard;
