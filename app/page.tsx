

export default function Home() {
    return (
        <div className="min-h-screen bg-background p-5 text-foreground">
            {/* Header */}
            <header className="bg-card shadow-md rounded-lg p-6 mb-5">
                <h1 className="text-3xl font-bold text-card-foreground">Dashboard</h1>
                <p className="text-muted-foreground mt-2">
                    Welcome to your personalized dashboard! This app helps you manage your tasks efficiently and stay organized.
                    Explore your recent activities, manage tasks, and stay on top of your projects.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Overview Card */}
                <div className="bg-card p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-card-foreground">Total Tasks</h2>
                    <p className="text-muted-foreground mt-2">
                        View and manage all the tasks you've created within this application.
                    </p>
                </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-card p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">Recent Activities</h2>
                <ul className="space-y-4">
                    <li className="text-muted-foreground">
                        This section will display a list of recent activities related to your tasks and projects.
                    </li>
                    <li className="text-muted-foreground">
                        Each activity will include details like who completed a task, updates to projects, and any new tasks added.
                    </li>
                </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">Tasks Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-foreground">Project Alpha</h3>
                        <p className="text-muted-foreground">
                            This section provides an overview of the tasks associated with Project Alpha.
                        </p>
                    </div>
                    <div className="bg-accent p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-foreground">Project Beta</h3>
                        <p className="text-muted-foreground">
                            This section provides an overview of the tasks associated with Project Beta.
                        </p>
                    </div>
                    <div className="bg-accent p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-foreground">Project Gamma</h3>
                        <p className="text-muted-foreground">
                            This section provides an overview of the tasks associated with Project Gamma.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
