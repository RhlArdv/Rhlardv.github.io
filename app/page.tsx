


import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import FloatingDock from '@/components/FloatingDock';
import ContactCTA from '@/components/ContactCTA';
import MetricsDashboard from '@/components/MetricsDashboard';
import { GitHubStats, ContributionStats, ContributionDay, GitHubRepo } from '@/types';

async function getGitHubStats() {
  try {
    // Parallelize fetches
    const [userRes, reposRes, contributionsRes] = await Promise.all([
      fetch('https://api.github.com/users/rfssu', { next: { revalidate: 3600 } }),
      fetch('https://api.github.com/users/rfssu/repos?per_page=100', { next: { revalidate: 3600 } }),
      fetch('https://github-contributions-api.jogruber.de/v4/rfssu?y=last', { next: { revalidate: 3600 } })
    ]);

    if (!userRes.ok || !reposRes.ok || !contributionsRes.ok) throw new Error('Failed to fetch data');

    const userData = await userRes.json();
    const reposData: GitHubRepo[] = await reposRes.json();
    const contributionsData = await contributionsRes.json();

    const totalStars = reposData.reduce((acc: number, repo: GitHubRepo) => acc + repo.stargazers_count, 0);
    const totalForks = reposData.reduce((acc: number, repo: GitHubRepo) => acc + repo.forks_count, 0);

    const githubStats: GitHubStats = {
      publicRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      totalStars,
      totalForks,
    };

    const totalContributions = contributionsData.total.lastYear || 0;
    const contributions = contributionsData.contributions || [];

    // Calculate streaks
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    let isCurrentStreakActive = true;

    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        tempStreak++;
        if (isCurrentStreakActive) currentStreak++;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        tempStreak = 0;
        isCurrentStreakActive = false;
      }
    }

    const avgPerDay = contributions.length > 0
      ? parseFloat((totalContributions / contributions.length).toFixed(1))
      : 0;

    const contributionStats: ContributionStats = {
      totalContributions,
      currentStreak,
      longestStreak,
      avgPerDay,
    };

    return {
      githubStats,
      contributionStats,
      contributionData: contributions as ContributionDay[],
    };

  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      githubStats: null,
      contributionStats: null,
      contributionData: [],
    };
  }
}

export default async function Home() {
  const { githubStats, contributionStats, contributionData } = await getGitHubStats();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-200 transition-colors duration-300 selection:bg-indigo-500/30">

      {/* Navigation Dock */}
      <FloatingDock />

      {/* Hero Section */}
      <div id="hero" className="container mx-auto px-4 sm:px-6 md:px-12">
        <Hero />
      </div>

      {/* Tech Stack */}
      <TechStack />

      {/* Projects Section (Otomatis memanggil data & desain) */}
      <Projects />

      {/* Container untuk sisa konten */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 pb-24 sm:pb-28 md:pb-32">

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* CTA Section */}
        <ContactCTA />

      </div>

      {/* Metrics Dashboard */}
      <MetricsDashboard
        githubStats={githubStats}
        contributionStats={contributionStats}
        contributionData={contributionData}
      />
    </main>
  );
}