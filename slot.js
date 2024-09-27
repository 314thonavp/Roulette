const departments = [
    "Supply Chain",
    "Quality Control",
    "Quality Assurance",
    "Process Development",
    "Manufacturing"
];

let chosenDepartments = [];

document.getElementById('spinButton').addEventListener('click', function() {
    spinSlot();
});

function spinSlot() {
    if (departments.length === 0) {
        document.getElementById('departmentSlot').innerText = "No Departments Left";
        document.getElementById('nextSpeaker').innerText = "Next Speaker: None";
        return;
    }

    let slot = document.getElementById('departmentSlot');
    let nextSpeaker = document.getElementById('nextSpeaker');
    slot.innerText = "";
    nextSpeaker.innerText = "Next Speaker: ...";

    let current = 0;
    let duration = 5000;
    let interval = setInterval(() => {
        slot.innerText = departments[current % departments.length];
        current++;
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        let chosenIndex = Math.floor(Math.random() * departments.length);
        let chosenDepartment = departments.splice(chosenIndex, 1)[0];
        slot.innerText = chosenDepartment;
        nextSpeaker.innerText = "Next Speaker: " + chosenDepartment;

        // Trigger confetti effect
        confettiEffect();
    }, duration);
}

function confettiEffect() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });

    fire(0.2, {
        spread: 60,
    });

    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}