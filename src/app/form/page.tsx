

export default function Wallet() {
    return (
        <div>
            <div className="lg:pl-72">
                <main>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <p>
                            Wallet
                        </p>
                        <p>
                            NCU 
                            Second library on the list, second exception. I install this package globally since I used it for all my project, and it doesn’t need to be in the projects themselves.

This library helps find outdated packages and allow automatic or interactive updates. You can simply run ncu to get a list of outdated packages. Once you know what’s available for upgrade, you could either:

Update everything automatically:  ncu -u.
Update interactively only what you want: ncu -i
I would personally recommend the interactive methods since you have to confirm if you want to update or not. The following images show how updates can be managed with ncu or with pnpm.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    )

}